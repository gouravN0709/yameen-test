"use client";

import { title } from "@/components/primitives";
import { z, ZodType } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { newBlog } from "@/types";

export default function BlogPage() {
  const mySchema: ZodType<newBlog> = z.object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .refine(
        (value) => {
          const regex = /^[a-zA-Z\s]+$/;
          return regex.test(value);
        },
        {
          message: "Name must contain only letters",
        }
      ),
    email: z.string().email("Invalid email"),
    message: z.optional(z.string()),
  });

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mySchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className={title() + "mt-10"}>ZOD FORM PAGE</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <div>
                <Input
                  label="Name"
                  {...field}
                  classNames={{
                    errorMessage: "text-left",
                  }}
                  isInvalid={invalid}
                  color={invalid ? "danger" : "default"}
                  errorMessage={error?.message as string}
                />
              </div>
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <div>
              <Input
                label="Email"
                {...field}
                classNames={{
                  errorMessage: "text-left",
                }}
                isInvalid={invalid}
                color={invalid ? "danger" : "default"}
                errorMessage={error?.message as string}
              />
            </div>
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <Input
                  label="Message"
                  {...field}
                  color={errors.message ? "danger" : "default"}
                  errorMessage={errors.message?.message as string}
                />
              </div>
            );
          }}
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
