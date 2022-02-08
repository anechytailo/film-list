// test-utils.js
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

export const RecoilObserver = ({node, onChange}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
