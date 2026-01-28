interface SymptomItem {
  symptom: string;
  description: string;
}

interface SymptomTableProps {
  title: string;
  items: SymptomItem[];
}

export function SymptomTable({ title, items }: SymptomTableProps) {
  return (
    <div className="my-4">
      <h4 className="font-bold text-foreground mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">{item.symptom}:</span>{' '}
              <span className="text-muted-foreground">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ToxinItem {
  name: string;
  component?: string;
  symptoms: string;
  urgency?: string;
}

interface ToxinTableProps {
  items: ToxinItem[];
}

export function ToxinTable({ items }: ToxinTableProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted">
            <th className="text-left p-3 font-semibold text-foreground border border-border">Item</th>
            {items[0]?.component && (
              <th className="text-left p-3 font-semibold text-foreground border border-border">Toxic Component</th>
            )}
            <th className="text-left p-3 font-semibold text-foreground border border-border">Symptoms</th>
            {items[0]?.urgency && (
              <th className="text-left p-3 font-semibold text-foreground border border-border">Urgency</th>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-muted/50">
              <td className="p-3 border border-border font-medium text-foreground">{item.name}</td>
              {item.component !== undefined && (
                <td className="p-3 border border-border text-muted-foreground">{item.component}</td>
              )}
              <td className="p-3 border border-border text-muted-foreground">{item.symptoms}</td>
              {item.urgency !== undefined && (
                <td className={`p-3 border border-border font-semibold ${
                  item.urgency === 'CRITICAL' ? 'text-red-600 dark:text-red-400' :
                  item.urgency === 'HIGH' ? 'text-orange-600 dark:text-orange-400' :
                  item.urgency === 'MODERATE' ? 'text-amber-600 dark:text-amber-400' :
                  'text-green-600 dark:text-green-400'
                }`}>{item.urgency}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface VetClinic {
  name: string;
  address: string;
  phone: string;
  notes?: string;
}

interface VetDirectoryTableProps {
  state: string;
  clinics: VetClinic[];
}

export function VetDirectoryTable({ state, clinics }: VetDirectoryTableProps) {
  return (
    <div className="my-6">
      <h4 className="text-lg font-bold text-primary mb-3">{state}</h4>
      <div className="space-y-3">
        {clinics.map((clinic, index) => (
          <div key={index} className="p-4 bg-card border border-border rounded-lg">
            <h5 className="font-semibold text-foreground">{clinic.name}</h5>
            <p className="text-sm text-muted-foreground mt-1">{clinic.address}</p>
            {clinic.phone && (
              <a 
                href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-2"
              >
                📞 {clinic.phone}
              </a>
            )}
            {clinic.notes && (
              <p className="text-xs text-muted-foreground mt-1 italic">{clinic.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ChecklistItem {
  item: string;
  description?: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3 p-2">
          <div className="w-5 h-5 mt-0.5 border-2 border-primary rounded flex-shrink-0" />
          <div>
            <span className="font-medium text-foreground">{item.item}</span>
            {item.description && (
              <span className="text-muted-foreground text-sm"> — {item.description}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
