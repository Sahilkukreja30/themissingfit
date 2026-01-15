import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield, AlertTriangle, Info } from 'lucide-react';
import { damagePenalties } from '@/data/dresses';

const PoliciesSection = () => {
  return (
    <section id="policies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Rental <span className="text-gradient-gold">Policies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in transparency. Here's everything you need to know about our rental terms, 
            security deposits, and damage policies.
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Security Deposit */}
          <div className="card-elegant p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground">Security Deposit</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Required at the time of booking confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Amount varies based on outfit value (₹5,000 - ₹15,000)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Fully refundable within 3-5 business days after return inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Accepted via UPI, bank transfer, or cash</span>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div className="card-elegant p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Info className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground">Important Notes</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Standard rental period is 3 days (pick-up day + event day + return day)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Extensions available at ₹500-₹1,500 per additional day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Professional dry cleaning is included in the rental</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Please avoid perfumes, deodorants, and makeup near the outfit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Damage Penalties */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="card-elegant p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-burgundy/10">
                <AlertTriangle className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="font-display text-xl text-foreground">Damage Penalty Structure</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {damagePenalties.map((penalty, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center justify-between flex-1 pr-4">
                      <span className="font-medium">{penalty.type}</span>
                      <span className="text-sm text-muted-foreground">
                        {penalty.maxCharge === 0 
                          ? 'Full replacement cost'
                          : `₹${penalty.minCharge.toLocaleString()} - ₹${penalty.maxCharge.toLocaleString()}`
                        }
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {penalty.description}
                    {penalty.maxCharge === 0 && (
                      <p className="mt-2 text-burgundy font-medium">
                        Charges will be equivalent to the full outfit purchase price.
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-6 text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg">
              <strong className="text-foreground">Note:</strong> All damages are assessed upon return. 
              Any applicable charges will be deducted from your security deposit. 
              If damages exceed the deposit amount, the balance will need to be paid before future rentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;
