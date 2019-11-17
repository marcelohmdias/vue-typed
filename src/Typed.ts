import { PropOptions, PropType } from 'vue'

type PropValidator<T> = (value: T) => boolean
type PropDefault<T> = T | null | undefined | (() => T | null | undefined)

interface TypedInstance {
  array: TypedInstance
  bool: TypedInstance
  check<T>(validator: PropValidator<T>): TypedInstance
  date: TypedInstance
  def(): PropOptions<any>
  func: TypedInstance
  num: TypedInstance
  obj: TypedInstance
  required: TypedInstance
  str: TypedInstance
  sym: TypedInstance
  type<T>(type: PropType<T>): TypedInstance
  with<T>(value: PropDefault<T>): TypedInstance
}

export default class Typed {
  private props: PropOptions<any> = {}

  /**
   * Create a new instance of Typed
   *
   * @readonly
   * @static
   * @type {TypedInstance}
   * @memberof Typed
   */
  static get is(): TypedInstance {
    return new Typed()
  }

  /**
   * Set Prop as required
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get required(): TypedInstance {
    this.props.required = true
    return this
  }

  /**
   * Set Prop type to Array
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get array(): TypedInstance {
    return this.type(Array)
  }

  /**
   * Set Prop type to Boolean
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get bool(): TypedInstance {
    return this.type(Boolean)
  }

  /**
   * Set Prop type to Date
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get date(): TypedInstance {
    return this.type(Date)
  }

  /**
   * Set Prop type to Function
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get func(): TypedInstance {
    return this.type(Function)
  }

  /**
   * Set Prop type to Number
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get num(): TypedInstance {
    return this.type(Number)
  }

  /**
   * Set Prop type to Object
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get obj(): TypedInstance {
    return this.type(Object)
  }

  /**
   * Set Prop type to String
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get str(): TypedInstance {
    return this.type(String)
  }

  /**
   * Set Prop type to Symbol
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  get sym(): TypedInstance {
    return this.type(Symbol)
  }

  /**
   * Returns a new Prop setting
   *
   * @type {PropOptions<any>}
   * @memberof Typed
   */
  def(): PropOptions<any> {
    return this.props
  }

  /**
   * Assigns a new default value to Prop
   *
   * @param {PropDefault<T>} value
   * @memberof Typed
   */
  with<T>(value: PropDefault<T>): TypedInstance {
    this.props.default = (): PropDefault<T> => value
    return this
  }

  /**
   * Defines a new type for Prop
   *
   * @readonly
   * @type {TypedInstance}
   * @memberof Typed
   */
  type<T>(type: PropType<T>): TypedInstance {
    this.props.type = type
    return this
  }

  /**
   * Assigns a validator to Prop
   *
   * @param {PropValidator<T>} validator
   * @memberof Typed
   */
  check<T>(validator: PropValidator<T>): TypedInstance {
    this.props.validator = validator
    return this
  }
}
