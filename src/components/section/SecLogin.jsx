import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function SecLogin() {
  return (
    <section className="container my-12">
      <div className="mx-auto flex w-2/5 flex-col justify-center">
        <h1 className="text-primary text-center text-4xl font-bold">Log In</h1>
        <form className="mt-6 flex flex-col">
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

          <div className="mt-2 flex justify-end">
            <NavLink to="/" className="text-primary text-sm">
              Forgot password?
            </NavLink>
          </div>

          <Button type="submit" variant="primary" className={"mt-8 px-5 py-3"}>
            Log In
          </Button>
        </form>
        <div className="mt-2 flex items-center justify-center gap-1">
          <p className="text-base text-black">Don&apos;t have an account?</p>
          <NavLink to="/sign-up" className="text-primary text-base">
            Sign Up
          </NavLink>
        </div>
      </div>
    </section>
  );
}
