import { ShieldCheck, Headset, BadgeCheck, Wrench } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Technical Support",
  },
  {
    icon: BadgeCheck,
    value: "100%",
    label: "Genuine Products",
  },
  {
    icon: Wrench,
    value: "Expert",
    label: "Installation Team",
  },
  {
    icon: Headset,
    value: "Fast",
    label: "After-Sales Service",
  },
];

const TrustStrip = () => {
  return (
    <section className="relative z-20 -mt-6 md:-mt-10 bg-background">
      <div className="container-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-2xl border border-border bg-card p-3 sm:p-4 md:p-6 shadow-md">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl bg-secondary/40 px-3 py-3.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
