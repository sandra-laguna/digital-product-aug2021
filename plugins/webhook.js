export default ({ $config: { n8nUrl }, $axios }, inject) => {
  inject("webhook", async (id, payload) => {
    return await $axios
      .$post(`${n8nUrl}/webhook/${id}`, payload)
      .then(() => true)
      .catch(() => false);
  });
};
