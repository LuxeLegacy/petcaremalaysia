import type { PAAAuthor } from '@/lib/paaTypes';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AuthorBoxProps {
  author: PAAAuthor;
}

export const AuthorBox = ({ author }: AuthorBoxProps) => {
  const initials = author.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-muted/50 rounded-lg p-5 my-8 flex gap-4 items-start">
      <Avatar className="h-16 w-16 shrink-0">
        {author.avatarUrl && <AvatarImage src={author.avatarUrl} alt={author.name} />}
        <AvatarFallback className="text-lg font-bold">{initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-bold text-foreground">{author.name}</p>
        <p className="text-xs text-muted-foreground mb-1">{author.credentials}</p>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  );
};
