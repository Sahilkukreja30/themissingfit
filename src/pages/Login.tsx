import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
import logo from "@/assets/logo.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/user/login", form); // ✅ axios instance

      toast.success("Welcome Admin 👋");
      navigate("/admin");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md card-elegant">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src={logo}
              alt="The Missing Fit"
              className="h-16 w-16 rounded-full mb-3"
            />
            <h1 className="font-display text-2xl">Admin Login</h1>
            <p className="text-muted-foreground text-sm">
              Sign in to manage inventory
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
