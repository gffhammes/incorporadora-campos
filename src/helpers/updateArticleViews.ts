export const updateArticleViews = (article: any) => {
  const { API_URL } = process.env;

  const currentViews = parseInt(article.attributes.contadorDeViews);

  fetch(`${API_URL}/api/blog-posts/${article.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        contadorDeViews: currentViews + 1,
      },
    }),
  });
};
