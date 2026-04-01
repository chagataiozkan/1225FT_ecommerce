import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import {
  emailRegex,
  passwordRegex,
  phoneRegex,
  taxIdRegex,
  ibanRegex,
} from "../utils/signupValidation";

export default function SignupForm() {
  const navigate = useNavigate();

  const [apiError, setApiError] = useState("");

  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: "",
      store_name: "",
      store_phone: "",
      tax_no: "",
      bank_account: "",
    },
  });

  const selectedRole = watch("role_id");
  const passwordValue = watch("password");
  const isStore = selectedRole === "2";

  useEffect(() => {
    if (roles.length === 0) {
      dispatch(fetchRoles());
    }
  }, [dispatch, roles]);

  useEffect(() => {
    if (roles.length > 0) {
      const customerRole = roles.find((role) => role.code === "customer");

      if (customerRole) {
        setValue("role_id", String(customerRole.id));
      }
    }
  }, [roles, setValue]);

  async function onSubmit(formData) {
    setApiError("");

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role_id: Number(formData.role_id),
    };

    if (isStore) {
      payload.store = {
        name: formData.store_name,
        phone: formData.store_phone,
        tax_no: formData.tax_no,
        bank_account: formData.bank_account,
      };
    }

    try {
      await api.post("/signup", payload);

      navigate(-1, {
        state: {
          warning: "You need to click the link in email to activate your account!",
        },
      });
    } catch (error) {
      console.log(error);

      setApiError(
        error?.response?.data?.message ||
          "Signup failed. Please check your information.",
      );
    }
  }

  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl rounded-[10px] bg-white px-6 py-10 shadow-sm lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-[#23A6F0]">CREATE ACCOUNT</p>
          <h1 className="mt-3 text-3xl font-bold text-[#252B42] lg:text-4xl">
            Sign Up
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#737373]">
            Create your account to continue with Bandage.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Email
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
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
                {errors.email.message}
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
              className="w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must be at least 8 characters and include upper, lower, number and special char",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#252B42]">
              Role
            </label>
            <select
              className="w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 outline-none focus:border-[#23A6F0] focus:bg-white"
              {...register("role_id", {
                required: "Role is required",
              })}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            {errors.role_id && (
              <p className="mt-1 text-xs text-red-500">
                {errors.role_id.message}
              </p>
            )}
          </div>

          {isStore && (
            <div className="space-y-5 rounded-[10px] border border-[#E6E6E6] bg-[#FAFAFA] p-5">
              <h2 className="text-base font-bold text-[#252B42]">
                Store Information
              </h2>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Name
                </label>
                <input
                  type="text"
                  placeholder="Store name"
                  className="w-full rounded-[5px] border border-[#E6E6E6] bg-white px-4 py-3 outline-none focus:border-[#23A6F0]"
                  {...register("store_name", {
                    required: "Store name is required",
                    minLength: {
                      value: 3,
                      message: "Store name must be at least 3 characters",
                    },
                  })}
                />
                {errors.store_name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store_name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Phone
                </label>
                <input
                  type="text"
                  placeholder="05xxxxxxxxx"
                  className="w-full rounded-[5px] border border-[#E6E6E6] bg-white px-4 py-3 outline-none focus:border-[#23A6F0]"
                  {...register("store_phone", {
                    required: "Store phone is required",
                    pattern: {
                      value: phoneRegex,
                      message: "Enter a valid Türkiye phone number",
                    },
                  })}
                />
                {errors.store_phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store_phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Tax ID
                </label>
                <input
                  type="text"
                  placeholder="T12345678V12"
                  className="w-full rounded-[5px] border border-[#E6E6E6] bg-white px-4 py-3 outline-none focus:border-[#23A6F0]"
                  {...register("tax_no", {
                    required: "Tax ID is required",
                    pattern: {
                      value: taxIdRegex,
                      message: "Format must be TXXXXXXXXVXX",
                    },
                  })}
                />
                {errors.tax_no && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.tax_no.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#252B42]">
                  Store Bank Account
                </label>
                <input
                  type="text"
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  className="w-full rounded-[5px] border border-[#E6E6E6] bg-white px-4 py-3 outline-none focus:border-[#23A6F0]"
                  {...register("bank_account", {
                    required: "Bank account is required",
                    pattern: {
                      value: ibanRegex,
                      message: "Enter a valid IBAN",
                    },
                  })}
                />
                {errors.bank_account && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.bank_account.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {apiError && (
            <div className="rounded-[5px] bg-red-50 px-4 py-3 text-sm text-red-500">
              {apiError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-[5px] bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
