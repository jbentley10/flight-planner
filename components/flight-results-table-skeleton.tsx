import { Skeleton } from "@/components/ui/skeleton";

export default function FlightResultsSkeleton() {
  return (
    <div className='space-y-6'>
      <Skeleton className='h-10 w-3/4 max-w-lg' />
      <Skeleton className='h-6 w-1/2 max-w-md' />
      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-100'>
              {[...Array(4)].map((_, i) => (
                <th key={i} className='px-4 py-2'>
                  <Skeleton className='h-6 w-32' />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex} className='border-t'>
                {[...Array(4)].map((_, cellIndex) => (
                  <td key={cellIndex} className='px-4 py-4'>
                    <Skeleton className='h-6 w-24' />
                    {cellIndex === 0 && <Skeleton className='h-4 w-16 mt-2' />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
