import { defineCollection, z } from "astro:content";

const threadCollectionSchema = z.object({
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
  schema: threadCollectionSchema,
});

const CombatTacticsCityCollection = defineCollection({
  type: "content",
  schema: threadCollectionSchema,
});

const ZypherParadiseCollection = defineCollection({
  type: "content",
  schema: threadCollectionSchema,
});

const PortTerreneCollection = defineCollection({
  type: "content",
  schema: threadCollectionSchema,
});

//

const threadSchema = z.object({
  title: z.string(),
  views: z.number(),
  replies: z.number(),
});

export const collections = {
  blimCity22: BlimCityCollection,
  combatTactics: CombatTacticsCityCollection,
  zypherParadise: ZypherParadiseCollection,
  portTerrene: PortTerreneCollection,
  threadSchema,
};
