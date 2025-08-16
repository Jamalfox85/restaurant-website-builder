<template>
    <div class="view-wrapper">
        <div class="view-header">
            <h1 class="view-title">Dashboard</h1>
        </div>

        <!-- Quick Stats -->
        <div class="quick-stats">
            <n-card class="quick-stat-card">
                <p class="stat-label">Menu Items</p>
                <p class="stat-num">120</p>
            </n-card>
            <n-card class="quick-stat-card">
                <p class="stat-label">Categories</p>
                <p class="stat-num">15</p>
            </n-card>
            <n-card class="quick-stat-card">
                <p class="stat-label">Visitors</p>
                <p class="stat-num">5000</p>
            </n-card>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
            <h2 class="page-subheader">Quick Actions</h2>
            <div class="action-buttons">
                <n-button color="#03256c" size="large" @click="newItem"
                    >Add Menu Item</n-button
                >
                <n-button ghost size="large" @click="$router.push('/analytics')"
                    >View Analytics</n-button
                >
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="recent-activity">
            <h2 class="page-subheader">Recent Activity</h2>
            <n-list bordered>
                <n-list-item
                    v-for="(activity, index) in recentActivity"
                    :key="index"
                >
                    <div class="activity-item">
                        <span class="activity-text">{{ activity.text }}</span>
                        <span class="activity-time">{{ activity.time }}</span>
                    </div>
                </n-list-item>
            </n-list>
        </div>
    </div>
</template>

<script>
import {
    NGrid,
    NGi,
    NCard,
    NButton,
    NStatistic,
    NSpace,
    NList,
    NListItem,
} from "naive-ui";
import drawer_items_create from "@/partials/drawers/drawer_items_create.vue";

export default {
    components: {
        NGrid,
        NGi,
        NCard,
        NButton,
        NStatistic,
        NSpace,
        NList,
        NListItem,
        drawer_items_create,
    },
    inject: ["openDrawer"],
    data() {
        return {
            currentTemplate: "Modern Bistro",
            recentActivity: [
                {
                    text: "Added 'Spaghetti Carbonara' to Pasta category",
                    time: "Today, 2:15 PM",
                },
                {
                    text: "Updated 'Opening Hours'",
                    time: "Yesterday, 5:45 PM",
                },
                {
                    text: "Changed template to Modern Bistro",
                    time: "Aug 8, 10:22 AM",
                },
            ],
        };
    },
    methods: {
        newItem() {
            this.openDrawer({
                component: drawer_items_create,
                title: "Create Item",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.view-wrapper {
    .view-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .quick-stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 4em;
        .quick-stat-card {
            background-color: #03256c10;
            border-radius: 8px;
            .stat-label {
            }
            .stat-num {
                font-size: 24px;
                font-weight: bold;
            }
        }
    }
    .quick-actions {
        margin-bottom: 4em;
        .page-subheader {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        .action-buttons {
            & > * {
                margin-right: 1em;
                border-radius: 8px;
            }
        }
    }
    .recent-activity {
        margin-bottom: 4em;
        .page-subheader {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
    }
}
.home-page {
    padding: 1rem;
}
.activity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.activity-text {
    font-size: 14px;
}
.activity-time {
    font-size: 12px;
    color: #888;
}
</style>
