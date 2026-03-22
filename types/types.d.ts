declare interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  readTime: string;
  keywords: string[];
  slug: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  collectionId?: string;
  status: "published" | "unpublished";
  publishedAt?: string;
}

declare interface Collection {
  id: string;
  name: string;
  description?: string;
  category?: string;
  coverImgUrl?: string;
  slug: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  articles: Article[];
}

declare interface Comment {
  id: string;
  articleId: string;
  comment: string;
  createdAt: string;
}

declare interface Subscribers {
  id: string;
  email: string;
  createdAt: string;
}

declare interface ArticleStore {
  blog: Article[];
  setBlog: (blog: Article[]) => void;
}

declare interface ArticleFormData {
  title: string;
  slug: string;
  description: string;
  category: string;
  content: string;
  keywords: string[];
  collectionId?: string;
  status: "published" | "unpublished";
}
