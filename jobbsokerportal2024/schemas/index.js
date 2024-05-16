import * as z from "zod";

export const CreateApplicationSchema = z.object({
  Stilling: z.string().min(1, {
    message: "Stillingstittelen kan ikke være tom",
  }),
  beskrivelse: z.string().min(1, {
    message: "Beskrivelsen kan ikke være tom",
  }),
  utlopsdato: z.date({
    message: "Du må velge en gyldig dato",
  }),
  picture: z.string().url({
    message: "Bildet må være en gyldig URL",
  }),
  stillingstittel: z.enum(["DriftsLerling", "UtviklerLerling"]),
});
