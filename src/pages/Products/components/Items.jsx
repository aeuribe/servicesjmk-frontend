import { Card, Skeleton } from "@heroui/react";

export default function Items() {
  return (
    <Card className="w-[250px] space-y-6 p-5" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-28 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-4">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
}
