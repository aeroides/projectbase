export default function ({ store, redirect, error }) {
  if (!store.state.authUser) {
    redirect('/')
  }
}