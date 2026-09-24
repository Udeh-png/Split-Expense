import {
  SkeletonAvatar,
  SkeletonText,
  SkeletonUi,
} from "@/components/ui/Skeletons";

const MetricSkeleton = ({ compact = false }) => (
  <SkeletonUi
    className={`w-full ${compact ? "min-h-0" : "min-h-40 pb-2"} rounded`}
  >
    <div
      className={`flex h-full gap-y-9 gap-x-3 ${compact ? "p-4" : "flex-col p-5"}`}
    >
      <SkeletonUi
        className={
          compact ? "h-9 w-9 rounded-lg" : "h-10 w-10 rounded-full ml-1 mt-1"
        }
        isChild
      />
      <div className={`${compact ? "space-y-3" : "space-y-5"}`}>
        <SkeletonUi className={compact ? "h-3 w-14" : "h-6 w-24"} isChild />
        <SkeletonUi className={compact ? "w-24 h-2" : "w-28 h-3"} isChild />
      </div>
    </div>
  </SkeletonUi>
);

const ActionSkeleton = () => {
  return (
    <div className="group flex flex-col gap-3.5 rounded-xl p-4 border border-border">
      <SkeletonUi isChild className="rounded-lg size-8" />

      <SkeletonUi className="w-14 h-2.5" isChild />
    </div>
  );
};

const PanelSkeleton = () => (
  <SkeletonUi className="min-w-0 rounded">
    <div className="p-5 sm:py-7.5 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SkeletonUi className="h-7 w-7 rounded-lg" isChild />
          <SkeletonText width="w-32" isChild />
        </div>

        <SkeletonText width="w-14 mb-1" isChild />
      </div>

      <div className="mt-5 space-y-7 px-1">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <SkeletonAvatar size="size-8.5" isChild />
            <div className="min-w-0 flex-1 space-y-2">
              <SkeletonText width="w-2/5" isChild />
              <SkeletonText width="w-3/4" isChild />
            </div>
            <SkeletonText width="w-10" isChild />
          </div>
        ))}
      </div>
    </div>
  </SkeletonUi>
);

export function AdminDashboardSkeleton() {
  return (
    <div className="space-y-4 mt-1">
      <div className="mb-8">
        <div className="mb-3">
          <SkeletonText width="w-32" />
        </div>
        <SkeletonUi className="h-7.5 sm:w-97 w-85 mb-4.5" />

        <SkeletonText width="w-80" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <MetricSkeleton key={item} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <MetricSkeleton key={item} compact />
        ))}
      </div>

      {/*Panel Skeletons*/}
      <div className="grid gap-4 lg:grid-cols-2">
        <SkeletonUi className="min-w-0 rounded">
          <div className="p-5 sm:py-7.5 sm:px-6">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between">
                  <SkeletonText width="w-31" isChild />
                </div>
                <div className="mt-5 space-y-6">
                  <div className="space-y-4">
                    <SkeletonUi className="h-2.5 w-full rounded-full" isChild />
                    <div className="flex gap-6">
                      <SkeletonText width="w-12" isChild />
                      <SkeletonText width="w-12" isChild />
                      <SkeletonText width="w-19" isChild />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <SkeletonText width="w-32" isChild />
                </div>
                <div className="mt-5 space-y-6">
                  <div className="space-y-4">
                    <SkeletonUi className="h-2.5 w-full rounded-full" isChild />
                    <div className="flex gap-x-6 gap-y-3 flex-wrap">
                      <SkeletonText width="w-12" isChild />
                      <SkeletonText width="w-16" isChild />
                      <SkeletonText width="w-25" isChild />
                      <SkeletonText width="w-20" isChild />
                      <SkeletonText width="w-20" isChild />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SkeletonUi>

        <SkeletonUi className="rounded">
          <div className="p-5 sm:py-7.5 sm:px-6 mt-1">
            <SkeletonText width="w-28" isChild />

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {[0, 1, 2, 3].map((i) => (
                <ActionSkeleton key={i} />
              ))}
            </div>
          </div>
        </SkeletonUi>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PanelSkeleton activity />
        <PanelSkeleton activity />
      </div>
    </div>
  );
}

export default AdminDashboardSkeleton;
