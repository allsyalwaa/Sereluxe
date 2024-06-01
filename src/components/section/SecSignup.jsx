import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function SecSignup() {
  return (
    <section className="container my-12">
      <div className="mx-auto flex w-3/5 flex-col justify-center">
        <h1 className="text-primary text-center text-4xl font-bold">Sign Up</h1>
        <form className="mt-6 flex flex-col">
          <input
            className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="mt-4 rounded-lg border-[1.5px] border-black/50 px-5 py-3 placeholder-black/50"
            type="password"
            placeholder="Password"
            required
          />

          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-sm border-[1.2px] border-black/50"
            />
            <div className="flex items-center gap-1">
              <p className="text-sm text-black">
                By checking this, I agree to the
              </p>
              <NavLink to="/sign-up" className="text-primary text-sm">
                Terms and Conditions
              </NavLink>
              <p className="text-sm text-black">and</p>
              <NavLink to="/sign-up" className="text-primary text-sm">
                Privacy Policy
              </NavLink>
            </div>
          </div>

          <Button type="submit" variant="primary" className={"mt-8 px-5 py-3"}>
            Sign Up
          </Button>
        </form>
        <div className="mt-2 flex items-center justify-center gap-1">
          <p className="text-base text-black">Have an account?</p>
          <NavLink to="/sign-up" className="text-primary text-base">
            Log In
          </NavLink>
        </div>
      </div>
    </section>
  );
}
