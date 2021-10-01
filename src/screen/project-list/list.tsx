import React from "react";
import type { User } from "./search-panel";

interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project: Project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* find可能return undefined，需要使用.? */}
            <td>
              {}
              {users.find((user: User) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
