import { IconType } from "react-icons/lib"

export function Icon({ icon } :IconType ) {
  const IconComponent = icon // Armazena o ícone passado como prop

  return (
    <div>
      <IconComponent />
    </div>
  )
}