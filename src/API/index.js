export async function getMaxItemId() {
  let r = await fetch('https://hacker-news.firebaseio.com/v0/maxitem.json');
  return await r.json();
}

export async function getNewTopBestStories() {
  let r = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  return await r.json();
}