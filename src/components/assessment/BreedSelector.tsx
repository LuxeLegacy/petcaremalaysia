import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { dogBreeds, catBreeds } from '@/lib/assessmentData';

interface BreedSelectorProps {
  petType: 'dog' | 'cat' | null;
  value: string;
  onChange: (breed: string) => void;
}

export function BreedSelector({ petType, value, onChange }: BreedSelectorProps) {
  const breeds = petType === 'dog' ? dogBreeds : petType === 'cat' ? catBreeds : [];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full h-14 text-base">
        <SelectValue placeholder="Select breed..." />
      </SelectTrigger>
      <SelectContent className="max-h-[300px]">
        {breeds.map((breed) => (
          <SelectItem key={breed} value={breed} className="text-base py-3">
            {breed}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
