export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getSession, status } = await useAuth();
    const session = await getSession();
    console.log(status.value);
    if(status.value === "unauthenticated" && to.path.includes("/admin")) {
        return navigateTo('/');
    }
})