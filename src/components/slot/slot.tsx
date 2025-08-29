import { cloneElement, Children } from 'react'
import { isValidElement } from 'react'
import { cx, ensure } from '../../utils'

interface SlotProps extends React.HTMLAttributes<HTMLElement> {}

export function Slot({ className, children, ...rest }: SlotProps) {
  const element = ensure(
    Children.toArray(children).find(
      (element): element is React.ReactElement<{ className?: string }> =>
        isValidElement(element),
    ),
    'At least one valid react element is required for Slot',
  )

  return cloneElement(element, {
    className: cx(element.props.className, className),
    ...rest,
  })
}
