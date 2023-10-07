import Image from 'next/image'
import ArchiveLayout from '@/containers/layout/ArchiveLayout';
import { ARTICLES } from '@/models/article';

export default function Home() {
  return (
    <ArchiveLayout articles={ARTICLES} />
  )
}
