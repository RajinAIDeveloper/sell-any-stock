import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-md">
          
          
          {/* Sign In Component */}
          
            <SignIn/>
          

          {/* Footer Section - Optional */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p className="space-x-1">
              <span>Need help?</span>
              <a href="/support" className="text-blue-600 hover:text-blue-500 font-medium">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}