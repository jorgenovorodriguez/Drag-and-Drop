import { Data, Status } from '../interfaces'
import { CardItem } from './CardItem'

interface Props {
    items: Data[]
    status: Status
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status) => void
}

export const ContainerCards = ({items = [], status, isDragging, handleDragging }: Props) => {

    return (
        <div 
        className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`} 
        >
            <p>{status} hero</p>
            {
                items.map(item => (
                    status === item.status &&
                        <CardItem
                            data={item}
                            key={item.id}
                            handleDragging={handleDragging}
                        />
                ))
            }
        </div>
    )
}