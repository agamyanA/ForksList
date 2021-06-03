import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class StateService<T extends object> {

  constructor(initialState: T) {
    this.stateSubj = new BehaviorSubject<T>(initialState)
  }

  private stateSubj!: BehaviorSubject<T>

  protected get state() {
    return this.stateSubj.getValue()
  }

  protected selectState<K>(select: (state: T) => K): Observable<K> {
    return this.stateSubj.asObservable().pipe(
      map((state: T) => select(state)),
      distinctUntilChanged()
    )
  }

  protected setState(newState: Partial<T>) {
    this.stateSubj.next({
      ...this.state,
      ...newState
    })
  }
}