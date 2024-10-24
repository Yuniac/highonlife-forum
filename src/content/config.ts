import { defineCollection, z } from "astro:content";

const threadSchema = z.object({
  title: z.string(),
  description: z.string(),
  comments: z.array(
    z.object({
      author: z.string(),
      content: z.string(),
    }),
  ),
  slug: z.string(),
});

const BlimCityCollection = defineCollection({
  type: "content",
  schema: threadSchema,
});

const CombatTacticsCityCollection = defineCollection({
  type: "content",
  schema: threadSchema,
});

const ZypherParadiseCollection = defineCollection({
  type: "content",
  schema: threadSchema,
});

const PortTerreneCollection = defineCollection({
  type: "content",
  schema: threadSchema,
});

export const collections = {
  blimCity: BlimCityCollection,
  combatTactics: CombatTacticsCityCollection,
  zypherParadise: ZypherParadiseCollection,
  portTerrene: PortTerreneCollection,
};
