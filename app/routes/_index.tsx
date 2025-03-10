import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("/jav"); // Redirect ไปที่ /jav อัตโนมัติ
};
