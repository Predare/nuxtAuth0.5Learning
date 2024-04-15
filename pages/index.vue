<script setup lang="ts">
const {data, signIn, signOut, status} = useAuth();

async function login() {
    await signIn('credentials', {email: '123@123.com', password: '123', callbackUrl: "/admin"});
    if(status.value === 'authenticated') {
        console.log(status.value);
        await navigateTo('/admin', { external: true });
    }
}

async function testRequest() {
    await $fetch('/api/test', {method: 'GET'});
}

async function testAdminRequest() {
    const data = await $fetch('/api/admin/testAdmin', {method: 'GET'});
}

async function logout() {
    await signOut();
}
</script>

<template>
    <div class="flex flex-col gap-5">
        <button @click="login">Login</button>
        <button @click="testRequest">Data</button>
        <button @click="testAdminRequest">Secret data</button>
        <button @click="logout">Logout</button>
    </div>
</template>