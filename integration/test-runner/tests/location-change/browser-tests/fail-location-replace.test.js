setTimeout(() => {
  window.location.replace('/new-page/');
}, 100);

it('x', async function test() {
  this.timeout(20000);
  await new Promise(r => setTimeout(r, 10000));
});
