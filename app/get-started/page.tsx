"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  User,
  BookOpen,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          age: "",
          course: "",
          preferredTime: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitStatus("idle");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcfbf7] to-white pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-jameel-noori">
            اپنا سفر شروع کریں
          </h1>
          <p className="text-lg text-gray-600 font-jameel-noori">
            قرآنی تعلیم کے سفر میں ہمارے ساتھ شامل ہوں
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name */}
            <div className="space-y-2">
              <Label
                htmlFor="studentName"
                className="text-base font-semibold flex items-center gap-2"
              >
                <User className="w-4 h-4 text-[#009FC8]" />
                طالب علم کا نام / Student Name
              </Label>
              <Input
                id="studentName"
                type="text"
                placeholder="طالب علم کا نام درج کریں"
                value={formData.studentName}
                onChange={(e) => handleChange("studentName", e.target.value)}
                required
                className="h-12 text-lg"
              />
            </div>

            {/* Parent/Guardian Name */}
            <div className="space-y-2">
              <Label
                htmlFor="parentName"
                className="text-base font-semibold flex items-center gap-2"
              >
                <User className="w-4 h-4 text-[#009FC8]" />
                والدین کا نام / Parent/Guardian Name
              </Label>
              <Input
                id="parentName"
                type="text"
                placeholder="والدین کا نام درج کریں"
                value={formData.parentName}
                onChange={(e) => handleChange("parentName", e.target.value)}
                required
                className="h-12 text-lg"
              />
            </div>

            {/* Email and Phone - Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#009FC8]" />
                  ای میل / Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#009FC8]" />
                  فون نمبر / Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="h-12 text-lg"
                />
              </div>
            </div>

            {/* Age and Course - Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="age"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#009FC8]" />
                  عمر / Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="عمر درج کریں"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  required
                  min="4"
                  max="100"
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="course"
                  className="text-base font-semibold flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#009FC8]" />
                  کورس منتخب کریں / Select Course
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleChange("course", value)}
                >
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="کورس منتخب کریں" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="noorani-qaida">
                      نورانی قاعدہ / Noorani Qaida
                    </SelectItem>
                    <SelectItem value="quran-reading">
                      قرآن خوانی / Quran Reading
                    </SelectItem>
                    <SelectItem value="tajweed">
                      تجوید القرآن / Tajweed
                    </SelectItem>
                    <SelectItem value="memorization">
                      قرآن حفظ / Quran Memorization
                    </SelectItem>
                    <SelectItem value="islamic-studies">
                      اسلامی مطالعہ / Islamic Studies
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Preferred Time */}
            <div className="space-y-2">
              <Label
                htmlFor="preferredTime"
                className="text-base font-semibold flex items-center gap-2"
              >
                <Clock className="w-4 h-4 text-[#009FC8]" />
                ترجیحی وقت / Preferred Time
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleChange("preferredTime", value)}
              >
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="وقت منتخب کریں" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">
                    صبح / Morning (8 AM - 12 PM)
                  </SelectItem>
                  <SelectItem value="afternoon">
                    دوپہر / Afternoon (12 PM - 4 PM)
                  </SelectItem>
                  <SelectItem value="evening">
                    شام / Evening (4 PM - 8 PM)
                  </SelectItem>
                  <SelectItem value="night">
                    رات / Night (8 PM - 10 PM)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-semibold">
                اضافی معلومات / Additional Information (Optional)
              </Label>
              <Textarea
                id="message"
                placeholder="کوئی خاص ضرورت یا سوال..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                className="text-lg resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold gradient-gold text-white hover:opacity-90 transition-opacity"
              >
                {isSubmitting
                  ? "جمع کرایا جا رہا ہے..."
                  : "فارم جمع کرائیں / Submit Form"}
              </Button>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-6 py-4 rounded-lg text-center font-semibold">
                ✓ Your form has been submitted successfully! We will contact you
                soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg text-center font-semibold flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>
                    Something went wrong! Please try again or call us directly.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 font-jameel-noori text-lg">
            یا ہمیں براہ راست رابطہ کریں / Or contact us directly
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="https://wa.me/+923005806700"
              target="_blank"
              className="flex items-center gap-2 text-[#009FC8] hover:underline"
            >
              <Phone className="w-4 h-4" />
              +92 300 5806700
            </Link>
            <Link
              href="mailto:info@quraanhouse.com"
              className="flex items-center gap-2 text-[#009FC8] hover:underline"
            >
              <Mail className="w-4 h-4" />
              info@quraanhouse.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
