

export const DataLoader = () => {
  return (
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}

export const CenteredDataLoader = () => {
  return (
    <div class="flex-it justify-center items-center">
      <DataLoader />
    </div>
  )
}
