import { useState, useEffect } from "react";

// hooks
import { useIsMounted } from "./useIsMounted";

// types

interface IOptions {
  triggerPromiseOnMount?: boolean;
  deserializerFn?: (result: any) => void;
}

type PromiseFunction = (arr: any[]) => Promise<any>;

interface IReturn {
  result: any;
  error: string | null;
  isLoading: boolean;
  triggerPromise: () => void;
}

/**
 * Hook to use as a base for promiseBased hooks like hooks for API REST calls.
 *
 * Allows to call the promise onMount, and to provide a deserializer function
 * to treat the promise result on succes.
 *
 * If the hook is unmounted while the promise is still not resolved,
 * the setState will be blocked to avoid memory leaks.
 *
 */
const usePromise = (
  promiseFunction: PromiseFunction,
  { triggerPromiseOnMount, deserializerFn }: IOptions
): IReturn => {
  const isMounted = useIsMounted();
  const [state, setState] = useState({
    result: null,
    error: null,
    isLoading: false,
  });

  const triggerPromise = async (...promiseParams: any[]) => {
    if (isMounted.current) {
      setState({ ...state, isLoading: true });
      try {
        let result = await promiseFunction(...promiseParams);
        if (deserializerFn) {
          result = deserializerFn(result);
        }
        if (isMounted.current) {
          setState({
            result,
            error: null,
            isLoading: false,
          });
        }
      } catch (error) {
        if (isMounted.current) {
          setState({
            result: null,
            error,
            isLoading: false,
          });
        }
      }
    }
  };
  useEffect(() => {
    if (triggerPromiseOnMount) triggerPromise();
  }, []);

  return {
    result: state.result,
    isLoading: state.isLoading,
    error: state.error,
    triggerPromise,
  };
};

export { usePromise };
