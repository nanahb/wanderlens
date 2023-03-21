import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import isAbsoluteURL from "is-absolute-url"
import * as React from "react"

// args is a list.  [e1, e2, e3] after filter, Boolean(e1), Boolean(e2), Boolean(e3)
export const stringify = (...args) => args.filter(x => Boolean(x)).join(" ")

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={stringify(..._cx, className)} {...props} />
}
/**
 * When you call <Base as="xyz" cx=[1,2,3]/> it calls the function Base({Component="li", _cx=[1,2,3]}) 
 * which will return <li className="1 2 3"/>.
 */

