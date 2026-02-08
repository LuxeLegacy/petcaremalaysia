import type { PAAComparisonRow } from '@/lib/paaTypes';
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from '@/components/ui/table';

interface ComparisonTableProps {
  rows: PAAComparisonRow[];
}

export const ComparisonTable = ({ rows }: ComparisonTableProps) => {
  if (!rows.length) return null;

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-[#1a73e8] text-foreground">
        💰 Cost Comparison
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Option</TableHead>
            <TableHead>Cost Range (RM)</TableHead>
            <TableHead className="hidden sm:table-cell">Time Required</TableHead>
            <TableHead className="hidden md:table-cell">Best For</TableHead>
            <TableHead className="hidden lg:table-cell">Pros/Cons</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{row.option}</TableCell>
              <TableCell>{row.costRange}</TableCell>
              <TableCell className="hidden sm:table-cell">{row.timeRequired}</TableCell>
              <TableCell className="hidden md:table-cell">{row.bestFor}</TableCell>
              <TableCell className="hidden lg:table-cell">{row.prosCons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
