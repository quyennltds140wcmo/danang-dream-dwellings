import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PHONE_RE = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

export function LeadForm({
  id,
  variant = "light",
}: {
  id?: string;
  variant?: "light" | "dark";
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const dark = variant === "dark";

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return toast.error("Vui lòng nhập họ tên");
    if (!PHONE_RE.test(phone.replace(/\s|\./g, "")))
      return toast.error("Số điện thoại không hợp lệ");
    setLoading(true);
    const lead = {
      name,
      phone,
      need,
      type,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("legend_leads") || "[]");
      localStorage.setItem("legend_leads", JSON.stringify([...prev, lead]));
    } catch {
      /* ignore */
    }
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: 8769133f-9a02-4627-8484-a00838fed604,
          subject: "Đăng ký nhận thông tin The Legend Đà Nẵng",
          fullname: name,
          phone,
          demand: need,
          apartment_type: type,
        }),
      });
      toast.success(
        "Cảm ơn bạn! Đăng ký nhận thông tin dự án The Legend Đà Nẵng thành công. Chúng tôi sẽ liên hệ lại sớm nhất."
      );
      setName("");
      setPhone("");
      setNeed("");
      setType("");
    } catch {
      toast.error("Gửi thất bại, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={id}
      className={`rounded-3xl p-6 md:p-8 border shadow-luxury ${
        dark
          ? "bg-gradient-royal border-gold-400/30 text-white"
          : "bg-white border-gold-500/30"
      }`}
    >
      <p className={`text-xs tracking-[0.3em] ${dark ? "text-gold-300" : "text-royal-700"}`}>
        ĐĂNG KÝ NHẬN TÀI LIỆU
      </p>
      <h3
        className={`mt-2 font-display text-2xl md:text-3xl font-bold ${
          dark ? "text-gold-200" : "text-royal-950"
        }`}
      >
        Nhận bảng giá & chính sách 07/2026
      </h3>
      <p className={`mt-2 text-sm ${dark ? "text-white/75" : "text-slate-600"}`}>
        Số lượng căn có hạn — hãy đăng ký để chọn được căn giá tốt nhất, tầng đẹp nhất.
      </p>

      <form
        name="register-legend-danang"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={submit}
        className="mt-6 grid sm:grid-cols-2 gap-4"
      >
        <input type="hidden" name="form-name" value="register-legend-danang" />
        <p className="hidden">
          <label>
            Bỏ qua: <input name="bot-field" />
          </label>
        </p>
        <div>
          <Label htmlFor={`${id}-name`} className={dark ? "text-white/90" : ""}>
            Họ và tên
          </Label>
          <Input
            id={`${id}-name`}
            name="fullname"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nguyễn Văn A"
            className={dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : ""}
          />
        </div>
        <div>
          <Label htmlFor={`${id}-phone`} className={dark ? "text-white/90" : ""}>
            Số điện thoại
          </Label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0973 043 452"
            className={dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : ""}
          />
        </div>
        <div>
          <Label className={dark ? "text-white/90" : ""}>Nhu cầu</Label>
          <input type="hidden" name="demand" value={need} />
          <Select value={need} onValueChange={setNeed}>
            <SelectTrigger
              className={dark ? "bg-white/10 border-white/20 text-white" : ""}
            >
              <SelectValue placeholder="Chọn nhu cầu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Để ở">Để ở</SelectItem>
              <SelectItem value="Đầu tư">Đầu tư</SelectItem>
              <SelectItem value="Cho thuê">Cho thuê</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className={dark ? "text-white/90" : ""}>Loại căn quan tâm</Label>
          <input type="hidden" name="apartment_type" value={type} />
          <Select value={type} onValueChange={setType}>
            <SelectTrigger
              className={dark ? "bg-white/10 border-white/20 text-white" : ""}
            >
              <SelectValue placeholder="Chọn loại căn" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 phòng ngủ">1 phòng ngủ</SelectItem>
              <SelectItem value="1 phòng ngủ + 1">1 phòng ngủ + 1</SelectItem>
              <SelectItem value="2 phòng ngủ">2 phòng ngủ</SelectItem>
              <SelectItem value="3 phòng ngủ">3 phòng ngủ</SelectItem>
              <SelectItem value="Penthouse">Penthouse</SelectItem>
              <SelectItem value="Căn hộ dịch vụ">Căn hộ dịch vụ</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full bg-gradient-gold text-royal-950 font-bold shadow-gold hover:opacity-90"
          >
            {loading ? "Đang gửi..." : "Nhận bảng giá & tài liệu →"}
          </Button>
          <p className={`mt-3 text-center text-xs ${dark ? "text-white/60" : "text-slate-500"}`}>
            🔒 Thông tin của bạn được bảo mật tuyệt đối.
          </p>
        </div>
      </form>
    </div>
  );
}
