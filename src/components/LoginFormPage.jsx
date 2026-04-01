import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emailRegex } from "../utils/signupValidation";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/clientActions";
import { toast } from "react-toastify";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(formData) {
    const result = await dispatch(loginUser(formData));

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    navigate(-1);
  }

  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl rounded-3 bg-white px-6 py-10 shadow-sm lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-[#23A6F0]">WELCOME TO BANDAGE</p>
          <h1 className="mt-3 text-3xl font-bold text-[#252B42] lg:text-4xl">
            Log In
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#737373]">
            Log in to continue with Bandage.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Email
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="w-full rounded-1 border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message};
              </p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full rounded-1 border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>
          <div className="flex items-center gap-3 pt-1">
            <input
              id="rememberMe"
              type="checkbox"
              className="h-4 w-4 cursor-pointer accent-[#23A6F0]"
              {...register("rememberMe")}
            />
            <label
              htmlFor="rememberMe"
              className="cursor-pointer text-sm font-medium text-[#737373]"
            >
              Remember me
            </label>
          </div>
          <div className="flex gap-6 pt-2 lg:flex-col">
            <button
              type="submit"
              disabled = {!isValid}
              className="flex-1 rounded-[5px] cursor-pointer bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:hover:opacity-100 disabled:cursor-default disabled:bg-[#737373]"
            >
              Log In
            </button>
            <Link
              to="/signup"
              className="flex-1 rounded-[5px] bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 text-center"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
