import { cx } from '../../utils'
import { Text } from '../text'
import { buttonRecipe, type ButtonVariants } from './button.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export function Button({ className, variant, ...rest }: ButtonProps) {
  return (
    <Text variant="button" asChild>
      <button
        type="button"
        className={cx(className, buttonRecipe({ variant }))}
        {...rest}
      />
    </Text>
  )
}
