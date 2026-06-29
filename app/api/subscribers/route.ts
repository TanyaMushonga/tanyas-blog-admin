import { validateRequest } from "@/auth";
import prisma from "../../../lib/prisma";
import { sendWelcomeEmail } from "@/lib/emails";

export async function GET() {
  try {
    const { user: loggedInUser } = await validateRequest();

    if (!loggedInUser) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }
    const subscribers = await prisma.subscribers.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify(subscribers), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving blog:", error);
    return new Response(
      JSON.stringify({ message: "error", error: (error as Error).message }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;
    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "The email is required" }), {
        status: 400,
      });
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400 }
      );
    }

    const emailExist = await prisma.subscribers.findUnique({
      where: { email: trimmedEmail },
    });

    if (emailExist) {
      return new Response(
        JSON.stringify({
          message: "You are already subscribed to our newsletter.",
        }),
        { status: 200 }
      );
    }
    const data = {
      email: trimmedEmail,
    };

    await prisma.subscribers.create({
      data,
    });

    // Send welcome email
    await sendWelcomeEmail(trimmedEmail);

    return new Response(
      JSON.stringify({
        message:
          "Thank you for subscribing to our newsletter!",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log("internal server error", error);
    return new Response(JSON.stringify({ error: "internal server error" }));
  }
}
