import Badge from "../components/badge";
import Text from "../components/text";


export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
          <Badge variant="secondary">5</Badge>
        </Text>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluidas
          <Badge variant="primary">2 de 5</Badge>
        </Text>
      </div>
    </>
  )
}