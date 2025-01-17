import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

function Signup() {
  return React.createElement(
    'div',
    { className: 'min-h-screen flex items-center justify-center bg-gray-900 px-4' },
    React.createElement(
      'div',
      { className: 'max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg' },
      React.createElement(
        'div',
        { className: 'text-center' },
        React.createElement(UserPlus, { className: 'mx-auto h-12 w-12 text-indigo-500' }),
        React.createElement(
          'h2',
          { className: 'mt-6 text-3xl font-bold text-white' },
          'Create your account'
        )
      ),
      React.createElement(
        'form',
        { className: 'mt-8 space-y-6' },
        React.createElement(
          'div',
          { className: 'rounded-md shadow-sm space-y-4' },
          React.createElement(
            'div',
            null,
            React.createElement('label', { htmlFor: 'name', className: 'sr-only' }, 'Full name'),
            React.createElement(
              'div',
              { className: 'relative' },
              React.createElement(
                'div',
                { className: 'absolute inset-y-0 left-0 pl-3 flex items-center' },
                React.createElement(User, { className: 'h-5 w-5 text-gray-400' })
              ),
              React.createElement('input', {
                id: 'name',
                name: 'name',
                type: 'text',
                required: true,
                className:
                  'appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                placeholder: 'Full name',
              })
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement('label', { htmlFor: 'email', className: 'sr-only' }, 'Email address'),
            React.createElement(
              'div',
              { className: 'relative' },
              React.createElement(
                'div',
                { className: 'absolute inset-y-0 left-0 pl-3 flex items-center' },
                React.createElement(Mail, { className: 'h-5 w-5 text-gray-400' })
              ),
              React.createElement('input', {
                id: 'email',
                name: 'email',
                type: 'email',
                required: true,
                className:
                  'appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                placeholder: 'Email address',
              })
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement('label', { htmlFor: 'password', className: 'sr-only' }, 'Password'),
            React.createElement(
              'div',
              { className: 'relative' },
              React.createElement(
                'div',
                { className: 'absolute inset-y-0 left-0 pl-3 flex items-center' },
                React.createElement(Lock, { className: 'h-5 w-5 text-gray-400' })
              ),
              React.createElement('input', {
                id: 'password',
                name: 'password',
                type: 'password',
                required: true,
                className:
                  'appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                placeholder: 'Password',
              })
            )
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            {
              type: 'submit',
              className:
                'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            },
            'Sign up'
          )
        )
      ),
      React.createElement(
        'p',
        { className: 'mt-2 text-center text-sm text-gray-400' },
        'Already have an account? ',
        React.createElement(
          Link,
          { to: '/login', className: 'font-medium text-indigo-400 hover:text-indigo-300' },
          'Sign in'
        )
      )
    )
  );
}

export default Signup;
