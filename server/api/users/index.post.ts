export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    let body: Record<string, unknown> = {};
    try {
        body = await readBody(event) ?? {};
    } catch {
        body = {};
    }

    const id = query.id ?? body?.id;

    if (!id) {
        throw createError({
            statusCode: 400,
            message: "Parameter 'id' er påkrævet",
        });
    }

    return {
        message: "her er users",
    };
});
