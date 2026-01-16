import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar, ArrowLeft, Plus, Trash2, Edit } from 'lucide-react';
import { dresses as initialDresses } from '@/data/dresses';
import { Dress, RentalPeriod } from '@/types/dress';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpeg';

const AdminPage = () => {
  const [dresses, setDresses] = useState<Dress[]>(initialDresses);
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
  const [isAddDressOpen, setIsAddDressOpen] = useState(false);

  const [dressForm, setDressForm] = useState({
    name: '',
    category: '',
    priceWithJewelry: '',
    priceWithoutJewelry: '',
    images: [] as File[],
  });

  const [rentalForm, setRentalForm] = useState({
    startDate: '',
    endDate: '',
    customerName: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddRental = (dressId: string) => {
    if (!rentalForm.startDate || !rentalForm.endDate) {
      toast.error('Please select both start and end dates');
      return;
    }

    const newRental: RentalPeriod = {
      id: `r${Date.now()}`,
      startDate: rentalForm.startDate,
      endDate: rentalForm.endDate,
      customerName: rentalForm.customerName || 'Anonymous',
    };

    setDresses(dresses.map(dress => {
      if (dress.id === dressId) {
        return {
          ...dress,
          isAvailable: false,
          rentalPeriods: [...(dress.rentalPeriods || []), newRental],
        };
      }
      return dress;
    }));

    toast.success('Rental period added successfully');
    setRentalForm({ startDate: '', endDate: '', customerName: '' });
    setIsDialogOpen(false);
  };
  const handleAddDress = () => {
    if (!dressForm.name || !dressForm.category) {
      toast.error('Please fill all required fields');
      return;
    }

    const newDress: Dress = {
      id: `d${Date.now()}`,
      name: dressForm.name,
      category: dressForm.category,
      priceWithJewelry: Number(dressForm.priceWithJewelry),
      priceWithoutJewelry: Number(dressForm.priceWithoutJewelry),
      image: URL.createObjectURL(dressForm.images[0]),
      isAvailable: true,
      rentalPeriods: [],
    };

    setDresses([newDress, ...dresses]);

    toast.success('Dress added successfully');
    setIsAddDressOpen(false);
    setDressForm({
      name: '',
      category: '',
      priceWithJewelry: '',
      priceWithoutJewelry: '',
      images: [],
    });
  };

  const handleRemoveRental = (dressId: string, rentalId: string) => {
    setDresses(dresses.map(dress => {
      if (dress.id === dressId) {
        const updatedRentals = (dress.rentalPeriods || []).filter(r => r.id !== rentalId);
        return {
          ...dress,
          isAvailable: updatedRentals.length === 0,
          rentalPeriods: updatedRentals,
        };
      }
      return dress;
    }));

    toast.success('Rental period removed');
  };

  const toggleAvailability = (dressId: string) => {
    setDresses(dresses.map(dress => {
      if (dress.id === dressId) {
        const newAvailability = !dress.isAvailable;
        return {
          ...dress,
          isAvailable: newAvailability,
          rentalPeriods: newAvailability ? [] : dress.rentalPeriods,
        };
      }
      return dress;
    }));
    toast.success('Availability updated');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-cream sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="The Missing Fit"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h1 className="font-display text-xl">Admin Dashboard</h1>
                <p className="text-cream/60 text-sm">Manage rentals & availability</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="heroOutline" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-display text-2xl text-foreground mb-2">Dress Inventory</h2>
          <p className="text-muted-foreground">
            Manage rental availability and track booking periods for each outfit.
          </p>
        </div>
        <div>
          <Dialog open={isAddDressOpen} onOpenChange={setIsAddDressOpen}>
            <DialogTrigger asChild>
              <Button variant="gold">
                <Plus className="h-4 w-4" />
                Add Dress
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display text-xl">
                  Add New Dress
                </DialogTitle>
                <DialogDescription>
                  Add a new outfit to your inventory.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Dress Name */}
                <div className="space-y-2">
                  <Label>Dress Name *</Label>
                  <Input
                    placeholder="Royal Navy Ballroom Gown"
                    value={dressForm.name}
                    onChange={(e) =>
                      setDressForm({ ...dressForm, name: e.target.value })
                    }
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label>Category *</Label>
                  <Input
                    placeholder="Gown / Lehenga / Saree"
                    value={dressForm.category}
                    onChange={(e) =>
                      setDressForm({ ...dressForm, category: e.target.value })
                    }
                  />
                </div>

                {/* Prices */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Price with Jewelry *</Label>
                    <Input
                      type="number"
                      placeholder="4500"
                      value={dressForm.priceWithJewelry}
                      onChange={(e) =>
                        setDressForm({
                          ...dressForm,
                          priceWithJewelry: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Price without Jewelry *</Label>
                    <Input
                      type="number"
                      placeholder="3200"
                      value={dressForm.priceWithoutJewelry}
                      onChange={(e) =>
                        setDressForm({
                          ...dressForm,
                          priceWithoutJewelry: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Images */}
                <div className="space-y-2">
                  <Label>Dress Images *</Label>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      setDressForm({
                        ...dressForm,
                        images: Array.from(e.target.files || []),
                      })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload multiple images for slider view
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsAddDressOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="gold"
                    className="flex-1"
                    onClick={handleAddDress}
                  >
                    Add Dress
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>


        {/* Dress Table */}
        <div className="card-elegant overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/50">
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current Rentals</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dresses.map((dress) => (
                <TableRow key={dress.id}>
                  <TableCell>
                    <img
                      src={dress.image}
                      alt={dress.name}
                      className="w-16 h-20 object-cover rounded-lg"
                    />
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">{dress.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ₹{dress.priceWithJewelry.toLocaleString()} with jewelry
                    </p>
                  </TableCell>
                  <TableCell className="capitalize">{dress.category}</TableCell>
                  <TableCell>
                    <Badge
                      className={dress.isAvailable
                        ? "bg-accent text-primary cursor-pointer"
                        : "bg-burgundy text-cream cursor-pointer"
                      }
                      onClick={() => toggleAvailability(dress.id)}
                    >
                      {dress.isAvailable ? 'Available' : 'Rented'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {dress.rentalPeriods && dress.rentalPeriods.length > 0 ? (
                      <div className="space-y-2">
                        {dress.rentalPeriods.map((rental) => (
                          <div key={rental.id} className="flex items-center gap-2 text-sm">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span>
                              {new Date(rental.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                              {' - '}
                              {new Date(rental.endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                            </span>
                            {rental.customerName && (
                              <span className="text-muted-foreground">({rental.customerName})</span>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                              onClick={() => handleRemoveRental(dress.id, rental.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">No active rentals</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog open={isDialogOpen && selectedDress?.id === dress.id} onOpenChange={(open) => {
                      setIsDialogOpen(open);
                      if (open) setSelectedDress(dress);
                    }}>
                      <DialogTrigger asChild>
                        <Button variant="gold" size="sm">
                          <Plus className="h-4 w-4" />
                          Add Rental
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="font-display text-xl">
                            Add Rental Period
                          </DialogTitle>
                          <DialogDescription>
                            Mark this outfit as rented for specific dates.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 mt-4">
                          <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                            <img
                              src={dress.image}
                              alt={dress.name}
                              className="w-16 h-20 object-cover rounded-lg"
                            />
                            <div>
                              <p className="font-medium">{dress.name}</p>
                              <p className="text-sm text-muted-foreground capitalize">{dress.category}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="startDate">Start Date *</Label>
                              <Input
                                id="startDate"
                                type="date"
                                value={rentalForm.startDate}
                                onChange={(e) => setRentalForm({ ...rentalForm, startDate: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="endDate">End Date *</Label>
                              <Input
                                id="endDate"
                                type="date"
                                value={rentalForm.endDate}
                                onChange={(e) => setRentalForm({ ...rentalForm, endDate: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="customerName">Customer Name (Optional)</Label>
                            <Input
                              id="customerName"
                              placeholder="e.g., Priya S."
                              value={rentalForm.customerName}
                              onChange={(e) => setRentalForm({ ...rentalForm, customerName: e.target.value })}
                            />
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={() => setIsDialogOpen(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="gold"
                              className="flex-1"
                              onClick={() => handleAddRental(dress.id)}
                            >
                              Add Rental Period
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-secondary/30 rounded-xl p-6">
          <h3 className="font-display text-lg text-foreground mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Click on the status badge to quickly toggle availability</li>
            <li>• Add rental periods to track when outfits are booked</li>
            <li>• Remove rental periods when outfits are returned</li>
            <li>• Customer names are optional but help with tracking</li>
          </ul>
        </div>
      </main >
    </div >
  );
};

export default AdminPage;
