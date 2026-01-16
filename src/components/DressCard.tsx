import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const DressCard = ({ dress, onViewDetails }) => {
  const isAvailable = dress.status === "Available";

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in renting the "${dress.dressTitle}" from The Missing Fit.`;
    window.open(
      `https://wa.me/917225994009?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="group card-elegant overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={dress.images?.[0]?.url}
          alt={dress.dressTitle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Availability Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            className={
              isAvailable
                ? "bg-accent text-primary"
                : "bg-burgundy text-cream"
            }
          >
            {isAvailable ? "Available" : "Currently Rented"}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge
            variant="outline"
            className="bg-card/80 backdrop-blur-sm capitalize"
          >
            {dress.category}
          </Badge>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full flex gap-2">
            <Button
              variant="hero"
              size="sm"
              className="flex-1"
              onClick={() => onViewDetails(dress)}
            >
              View Details
            </Button>
            <Button variant="whatsapp" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-2 line-clamp-1">
          {dress.dressTitle}
        </h3>

        {/* Pricing */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Without Jewelry</span>
            <span className="font-semibold text-foreground">
              ₹{dress.withoutJewelryPrice?.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">With Jewelry</span>
            <span className="font-semibold text-accent">
              ₹{dress.withJewelryPrice?.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Rental Status */}
        {!isAvailable && dress.currentRental && (
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg flex items-start gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div className="text-xs">
              <p className="text-muted-foreground">Available after</p>
              <p className="font-medium text-foreground">
                {new Date(
                  dress.currentRental.endDate
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DressCard;
