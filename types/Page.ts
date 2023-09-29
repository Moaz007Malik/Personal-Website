import { PortableTextBlock } from 'sanity'

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    content: PortableTextBlock[];
    slug: string;
};