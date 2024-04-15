import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {


    if (event.path.includes("/api/admin")) {
        const session = await getServerSession(event);
        if (!session) {
            return createError({
                statusCode: 401
            })
        }
    }
})