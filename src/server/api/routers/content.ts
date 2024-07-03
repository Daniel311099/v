import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const contentRouter = createTRPCRouter({
    getSection: publicProcedure
        .input(z.object({
            section: z.string()
        }))
        .query(async ({ input, ctx }) => {
            const section = await ctx.db.section.findFirst({
                where: { title: input.section }
            })
            const elements = await ctx.db.sectionElement.findMany({
                where: { sectionId: section?.id }
            })
            return { section, elements }
        }),
    getSectionElement: publicProcedure
        .input(z.object({
            section: z.string(),
            element: z.string()
        }))
        .query(async ({ input, ctx }) => {
            const {section, element} = input
            const section_ = await ctx.db.section.findFirst({
                where: { title: section }
            })
            const element_ = await ctx.db.sectionElement.findFirst({
                where: {
                    sectionId: section_?.id,
                    title: element
                }
            })
            return { 
                section: section_, 
                element: element_
             }
        }),
    getFaqs: publicProcedure
    .query(async ({ctx}) => {
        const faqs = await ctx.db.fAQ.findMany()
        return faqs
    })
})