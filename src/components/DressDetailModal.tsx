import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar } from "lucide-react";

// 🔥 Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DressDetailModal = ({ dress, isOpen, onClose }) => {
  if (!dress) return null;

  const isAvailable = dress.status === "Available";

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in renting the "${dress.dressTitle}" from The Missing Fit. Can you help me with the booking?`;
    window.open(
      `https://wa.me/917225994009?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {dress.dressTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* IMAGE SLIDER */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="rounded-xl overflow-hidden"
            >
              {dress.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[3/4]">
                    <img
                      src={img.url}
                      alt={`${dress.dressTitle} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* BADGES */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Badge
                className={
                  isAvailable
                    ? "bg-accent text-primary"
                    : "bg-burgundy text-cream"
                }
              >
                {isAvailable ? "Available Now" : "Currently Rented"}
              </Badge>

              <Badge
                variant="outline"
                className="bg-card/80 backdrop-blur-sm capitalize"
              >
                {dress.category}
              </Badge>
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-6">
            {/* PRICING */}
            <div className="bg-secondary/50 rounded-xl p-5 space-y-4">
              <h4 className="font-display text-lg text-foreground">
                Rental Pricing
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Outfit Only</span>
                  <span className="text-xl font-semibold text-foreground">
                    ₹{dress.withoutJewelryPrice?.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    With Matching Jewelry
                  </span>
                  <span className="text-xl font-semibold text-accent">
                    ₹{dress.withJewelryPrice?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* RENTAL STATUS */}
            {!isAvailable && dress.currentRental && (
              <div className="bg-burgundy/10 rounded-xl p-4 flex items-start gap-3">
                <Calendar className="h-5 w-5 text-burgundy mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">
                    Currently Rented
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Available after{" "}
                    {new Date(
                      dress.currentRental.endDate
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="whatsapp"
                size="lg"
                className="flex-1"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() =>
                  (window.location.href = "tel:+917225994009")
                }
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DressDetailModal;
