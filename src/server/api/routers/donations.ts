import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { stripe } from '~/server/stripe'
// import { db}

export const donationsRouter = createTRPCRouter({
    getOneTimeDonations: protectedProcedure.query(async ({ ctx }) => {
        const donations = await ctx.db.oneTimeDonation.findMany({
            where: { userId: ctx.session?.user.id },
        });
        return donations
    }),
    getSubscriptions: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.subscription.findMany({
            where: { userId: ctx.session?.user.id },
        });
    }),
    cancelSubscription: protectedProcedure
        .input(z.object({ subscriptionId: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { subscriptionId } = input;

            try {
                // Cancel the subscription in Stripe
                await stripe.subscriptions.cancel(subscriptionId);

                // Update the subscription status in your database
                await ctx.db.subscription.update({
                    where: { stripeSubscriptionId: subscriptionId },
                    data: { status: "canceled" },
                });

                return {
                    success: true,
                    message: "Subscription canceled successfully",
                };
            } catch (error) {
                console.error("Failed to cancel subscription:", error);
                throw new Error("Failed to cancel subscription");
            }
        }),
});
